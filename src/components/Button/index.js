import { classNames } from "@/utils/classNames";

export default function Button({ text, small, className }) {
  return (
    <button
      type='button'
      className={classNames(
        'border border-[#dee6ff] bg-transparent flex rounded-lg text-xs font-medium text-[#3a486a] w-fit',
        small ? 'px-3 py-2' : 'px-4 py-3',
        className
      )}
    >
      {text}
    </button>
  );
}
