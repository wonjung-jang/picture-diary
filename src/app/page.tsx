import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="bg-red-500 p-4 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold">Hello World</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
