import NavBar from '@/components/common/navBar'
import Header from '@/components/common/header'
import TopTen from '@/components/home/TopTen'
import PlayBar from '@/components/home/PlayBar'
import Preview from '@/components/home/Preview'
import MovieList from '@/components/home/MovieList'
import PopularList from '@/components/home/PopularList'
import TrendingList from '@/components/home/TrendingList'
import TopRatedList from '@/components/home/TopRated'
import * as style from '@/styles/globalTheme.css'

export default function Home() {
    return (
        <div className={style.root}>
            <div className={style.page}>
            <Header />
            <div className={style.wrapper}>
                <TopTen />
                <PlayBar />
                <Preview />
                <MovieList />
                <PopularList />
                <TrendingList />
                <TopRatedList />
            </div>
            <NavBar />
        </div>
        </div>
    )
}
