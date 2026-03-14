export default async function Home() {
  const res = await fetch(process.env.BACKEND_URL || 'http://localhost:3001/api/health', { cache: 'no-store' });
  const data = await res.json().catch(() => ({ status: 'error' }));

  return (
    <main>
      <h1>Gerenciador de Agendamentos</h1>
      <p>Backend Status: {data.status}</p>
    </main>
  );
}
