interface Props {
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Widget(props: Props) {
  const { className, children } = props;
  return (
    <div ref={props.ref} className={`rounded-2xl p-6 bg-widget ${className}`}>
      {children}
    </div>
  );
}
