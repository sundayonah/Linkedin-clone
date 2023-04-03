import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="user-img" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo.svg" alt="user-pic/" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video0.svg" alt="video-pic/" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/work-bag.svg" alt="event-pic/" />
            <span>Job</span>
          </button>

          <button>
            <img src="/images/article1.svg" alt="article-pic/" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shodow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-hieght: 1.5;
      min-hieght: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
`;
export default Main;
