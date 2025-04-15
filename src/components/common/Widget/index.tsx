interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Widget(props: Props) {
  const { className, children } = props;
  return (
    <div className={`rounded-2xl p-6 bg-widget ${className}`}>
      <h2>Widget Component</h2>
      <p>This is a reusable widget component.</p>
    </div>
  );
}
