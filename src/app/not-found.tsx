export default function NotFound() {
  return (
    <div className="flex h-[calc(100svh-488px)] flex-col items-center justify-center gap-4 bg-black text-white">
      <h1 className="text-4xl font-bold">404 Not found</h1>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
