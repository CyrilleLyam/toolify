import Link from 'next/link';

export default function Home() {
  const tools = [
    {
      title: 'Password Generator',
      description:
        'Generate cryptographically secure passwords with customizable options. Perfect for creating strong, unique passwords for all your accounts.',
      color: 'text-green-400',
      href: '/password-generator',
    },
    {
      title: 'JWT Secret Generator',
      description:
        'Create cryptographically secure JWT signing secrets with algorithm-specific presets. Essential for JSON Web Token authentication.',
      color: 'text-blue-400',
      href: '/jwt-secret-generator',
    },
    {
      title: 'Cron Expression Builder',
      description:
        'Easily create and validate cron expressions for scheduling tasks. Supports common patterns and custom configurations.',
      color: 'text-neutral-200',
      href: '/cron-expression',
    },
    {
      title: 'Khmer Calendar',
      description: 'Khmer calendar do for hobbies',
      color: 'text-yellow-600',
      href: '/khmer-calendar',
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <h1 id="tools-heading" className="mb-10 text-center text-3xl font-bold">
          Toolify — Developer Tools
        </h1>

        <section aria-labelledby="tools-heading">
          <ul role="list" className="grid content-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <li key={tool.title}>
                <Link
                  href={tool.href}
                  aria-label={tool.title}
                  className={[
                    'group block h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-6',
                    'hover:border-zinc-700 hover:bg-zinc-900/80',
                    'cursor-pointer transition duration-200 motion-reduce:transition-none',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60',
                  ].join(' ')}
                >
                  <article>
                    <h2
                      className={`mb-2 text-lg font-semibold group-hover:text-white ${tool.color}`}
                    >
                      {tool.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-400">{tool.description}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
