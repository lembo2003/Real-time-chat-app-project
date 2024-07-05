import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>To beo</h2>
        <p>Lorem ipsum dolor sit amet, </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>  <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>  <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT62iPsf4eg1YHuGNzeOEE1e5v-WFiQ1kPK4fcN0D1h4kFtSth-" alt="" />
            <span>photo_2024.png</span>
              </div>
            <img src="./download.png" alt=""  className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT62iPsf4eg1YHuGNzeOEE1e5v-WFiQ1kPK4fcN0D1h4kFtSth-" alt="" />
            <span>photo_2024.png</span>
              </div>
            <img src="./download.png" alt=""  className="icon" />
            </div>

           
          </div>
        </div>  <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail