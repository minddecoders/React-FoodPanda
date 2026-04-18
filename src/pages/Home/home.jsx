import style from './home.module.css';
import image from'../../assets/image.png';
import pizza from'../../assets/pizza.jpeg';

function Home(){
    return(

    <div className={style.container}>
      <div className={style.card}>
        
        <img 
          src={image}
          alt={style.card} 
          className={style.img}
        />

        <div className={style.content}>
          <span className={style.tag}>Learning</span>

          <p className={style.date}>Published 21 Dec 2023</p>

          <h2>HTML & CSS foundations</h2>

          <p className={style.desc}>
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>

          <div className={style.author}>
            <img 
              src={pizza} 
              alt="author"
            />
            <span>Greg Hooper</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;