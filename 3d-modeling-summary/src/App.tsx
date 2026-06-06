import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      {/* Verplaats de prose class naar de container die alles bevat */}
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4">Mijn 3D Modeling Summary</h1>
        <p>Hier komt de inhoud van je samenvatting...</p>
        
        <h2>Dit is een test</h2>
        <p>Als dit werkt, zie je nu dat de marges, lettertypes en regelafstand automatisch zijn aangepast door Tailwind Typography!</p>
      </article>
    </Layout>
  );
}
export default App;