import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full mr-4 ring-2 ring-indigo-500 dark:ring-indigo-400 p-0.5 overflow-hidden">
        <img src={picture} className="rounded-full w-full h-full object-cover" alt={name} />
      </div>
      <div className="text-xl font-bold dark:text-slate-300">{name}</div>
    </div>
  );
};

export default Avatar;
