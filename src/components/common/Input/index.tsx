import SearchIcon from '@/components/Icons/SearchIcon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  showSearchIcon?: boolean;
}

export default function Input(props: Props) {
  const { className, showSearchIcon, ...inputProps } = props;
  return (
    <div className={`py-3 px-6 bg-black-1e rounded-[36px] flex items-center ${className}`}>
      {showSearchIcon ? <SearchIcon width={32} height={32} className="shrink-0 mr-4" /> : null}
      <input
        type="text"
        className="w-full bg-transparent outline-none placeholder:text-black-5e text-white leading-none"
        {...inputProps}
      />
    </div>
  );
}
