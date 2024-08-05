import { Panel } from '@/components/Panels/Panels';
import { promises as fs } from 'fs';
import Logo from '@/components/Logo/Logo';

export default async function Work({ params }) {

    const { slug } = params;
    const work = await fs.readFile(`${process.cwd()}/src/content/work/${slug}/index.json`, 'utf-8').then(JSON.parse);

    return <div>
        <Panel style={{height: 'auto', minHeight: 'auto', overflow: 'hidden'}}>
            <Logo/>
        </Panel>
        <Panel>

            <h1 style={{marginBottom: '2em', fontFamily: 'sans-serif'}}>
                {work.title}
            </h1>

            <p>
                {work.description}
            </p>
            
            {work.links.map(link => <a href={link.url}>{link.title}</a>)}


            <a href="/">
              Back
            </a>

        </Panel>
    </div>
}