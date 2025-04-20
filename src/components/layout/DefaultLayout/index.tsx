interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return <div className="max-w-[1366px] mx-auto flow-root">{children}</div>;
}
