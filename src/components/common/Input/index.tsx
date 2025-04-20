import SearchIcon from '@/components/Icons/SearchIcon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  showSearchIcon?: boolean;
}

export default function Input(props: Props) {
  const { className, showSearchIcon, ...inputProps } = props;
  return (
    <div
      className={` py-2 px-4 sm:py-3 sm:px-6 bg-black-1e rounded-[36px] flex items-center ${className}`}
    >
      {showSearchIcon ? <SearchIcon className="shrink-0 mr-4 size-6 sm:size-8" /> : null}
      <input
        type="text"
        className="w-full text-base sm:text-lg bg-transparent outline-none placeholder:text-black-5e text-white leading-none"
        {...inputProps}
      />
    </div>
  );
}
