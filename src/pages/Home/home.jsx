import style from './home.module.css';

function Home(){
    return(
        <div className={style.home}>
        <div className={style.container}>
<img src="\src\assets\pizza.jpeg" alt="" />
<h4>Improve your front-end skills by building projects</h4>
<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                       </div> 

        </div>

    )
}
export default Home;