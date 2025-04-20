interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="px-4 md:px-0 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1366px] mx-auto flow-root py-[44px]">
      {children}
    </div>
  );
}
