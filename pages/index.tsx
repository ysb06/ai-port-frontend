import { NextPage } from 'next';
import Image from 'next/image'
import maskImage from '../public/images/home-01.jpg'


const FrontPage: NextPage = () => (
    <div id="frontpage" className="container">
        <section className="jumbotron text-center pt-5">
            <h1 className="jumbotron-heading">Seungbin&apos;s AI Portpolio</h1>
            <p>저의 포트폴리오 사이트에 오신 것을 환영합니다.</p>
        </section>
        <section className="ai-show-window">
            <div className="row my-3">
                <h2>AI Demo</h2>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card border-primary mb-5">
                        <div className="card-header">이미지 인식 모델</div>
                        <div className="card-body">
                            <Image className="card-img-top mb-3 p-3" src={maskImage} alt="Mask Image" />
                            <h4 className="card-title">마스크 인식 서비스</h4>
                            <p className="card-text">카메라에 있는 인물이 마스크를 착용했는지 여부를 검사할 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default FrontPage