export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='border-b text-center p-4'>20% off on first 500 users</div>
      {children}
    </>
  );
}
