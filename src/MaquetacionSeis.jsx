import Aside from "./components/Aside"
import ArticleYellow from './components/ArticleYellow'
import ArticleGreen from "./components/ArticleGreen"
import ArticlePurple from "./components/ArticlePurple"

const EjercicioSeis=()=>{
    return(
        <section>
            <section className="aside">
                <Aside/>
            </section>
            <main>
                <div>
                <ArticleYellow/>
                <ArticleYellow/>
                <ArticleYellow/>
                </div>
                <div>
                    <ArticleGreen/>
                    <ArticleGreen/>
                    <ArticleGreen/>
                </div>
                <div>
                    <ArticlePurple/>
                    <ArticlePurple/>
                    <ArticlePurple/>
                </div>
            </main>
        </section>
    )
}
export default EjercicioSeis
