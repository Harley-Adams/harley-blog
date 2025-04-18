---
title: "Repartitioning Cosmos DB Collections One Week Before Launch"
excerpt: "A real-world story about how we successfully repartitioned our Cosmos DB document collections just days before shipping a major product, the challenges we faced, and lessons learned from this high-stakes database operation."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-04-17T09:30:00.000Z"
author:
  name: Harley
  picture: "/assets/blog/authors/harley.png"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

# Repartitioning Cosmos DB Collections One Week Before Launch

We've all been there: your product is about to ship, everything looks great in testing, and then suddenly you realize one critical infrastructure component isn't going to scale as expected. This is the story of how our team repartitioned several Azure Cosmos DB collections just one week before launching our product to production, the challenges we encountered, and the lessons we learned along the way.

## The Setup

Our product relies heavily on Azure Cosmos DB as our primary data store. During development, we had set up several collections with a partition key that made sense at the time based on our initial understanding of the access patterns. We had configured our collections with the following settings:

- Initial RU/s: 400 (the minimum)
- Partition Key: `/customerId`
- Several collections with varying document sizes
- Expected production load: ~5,000 requests per second at peak

## The Realization

During our final load testing before launch, we observed something concerning: hot partitions. While our overall throughput was within the provisioned RU/s, specific partitions were getting hammered, resulting in throttling and increased latency. The issue was clear: our chosen partition key wasn't distributing the workload evenly across physical partitions.

Our telemetry showed that:
1. 80% of requests targeted just 15% of customers
2. Some customer documents were accessed 100x more frequently than others
3. The throttling would only get worse at production scale

## The Decision

After a tense meeting with stakeholders, we made the difficult decision to repartition our collections with just seven days to go before launch. The new partition key would be a composite key that included both the customer ID and another attribute that would better distribute our workload: `/customerId, /resourceType`.

## The Challenge

Repartitioning a Cosmos DB collection isn't a simple configuration change - it requires:

1. Creating entirely new collections with the correct partition key
2. Migrating all existing data to the new collections
3. Maintaining data consistency during the migration
4. Updating application code to use the new collections and partition key
5. Thorough testing to ensure nothing breaks

All of this while the clock was ticking down to our launch date.

## The Migration Strategy

We developed a multi-phase approach:

### 1. Set Up Change Feed Processors

The Cosmos DB Change Feed would be our savior. We set up change feed processors to:
- Capture all new writes to the original collections
- Replicate those changes to the new collections with the proper partition structure
- Maintain a checkpoint of processed documents to ensure nothing was missed

``` csharp
var builder = new ChangeFeedProcessorBuilder()
    .WithHostName("migration-host")
    .WithFeedCollection(sourceContainer)
    .WithLeaseCollection(leaseContainer)
    .WithProcessorOptions(new ChangeFeedProcessorOptions
    {
        StartFromBeginning = true,
        MaxItemCount = 100,
        FeedPollDelay = TimeSpan.FromMilliseconds(500)
    })
    .WithObserver<MigrationObserver>();
```

### 2. Bulk Data Migration

In parallel with the change feed processors, we ran a bulk migration job to move existing data:

1. Read documents in batches from the source collection
2. Transform and write them to the destination collection
3. Track progress to ensure all documents were migrated

### 3. Verification and Consistency Checks

We implemented robust verification to ensure data integrity:
- Count comparison between source and destination
- Sampling of documents to verify consistency
- Checksum validation on critical documents

### 4. Update Application Code

The tricky part was updating our application to use the new partition key structure. We had to:
- Modify query patterns to include the new partition key
- Update data access layers to route to the correct collection
- Implement feature flags to easily switch between old and new collections

### 5. Traffic Cut-over

Finally, we planned a staged cut-over:
- First 5% of traffic to the new collections
- Monitoring for any issues
- Gradual increase to 100% over 48 hours

## Lessons Learned

### 1. Partition Key Selection is Critical

Choose your partition key carefully based on:
- Access patterns
- Document distribution
- Query efficiency
- Future scalability

Don't just pick the most obvious attribute - analyze your workload and consider composite keys for better distribution.

### 2. Test at Scale Early

We should have done full-scale load testing much earlier in the development cycle. This would have revealed the partition hot-spots sooner and given us more time to address them.

### 3. Have a Migration Strategy Ready

Even with careful planning, you might need to repartition. Having a well-tested migration process ready can save precious time when you need it most.

### 4. Monitor Partition Metrics

Set up monitoring specifically for partition-level metrics, not just collection-level ones. This helps identify hot partitions before they become a problem.

## The Result

After a tense week of late nights and continuous monitoring, we successfully completed the migration. The launch went smoothly, with our new partition structure handling the production load without any throttling. Performance actually improved by 35% compared to our previous configuration.

## Takeaways

If you're using Cosmos DB or any partitioned database system, remember:

1. Partition key selection is arguably the most important design decision
2. Test with realistic data volumes and access patterns
3. Build migration tools early, even if you don't think you'll need them
4. Monitor at the partition level, not just the overall collection

Have you ever had to make significant infrastructure changes right before a launch? I'd love to hear about your experiences in the comments below.
