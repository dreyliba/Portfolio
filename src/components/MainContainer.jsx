export default function MainContainer({ children, maxWidth = "" }) {
  return (
    <main className={`w-full  flex items-center justify-center `}>
      <div className={`w-full ${maxWidth} mx-auto`}>{children}</div>
    </main>
  );
}
