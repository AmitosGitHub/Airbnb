// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Carousel } from 'react-responsive-carousel'

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { ImgCarousel } from '../cmps/img-carousel'




// function FancyBox(props) {
//     return <div className="fancy-box">
//         <button style={{ float: 'right' }} onClick={props.onClose}>x</button>
//         {props.children}
//     </div>
// }

// FancyBox.propTypes = {
//     onClose: PropTypes.func.isRequired
// }

// function Contacts() {
//     return <section style={{ height: '50vh', backgroundColor: 'pink' }}>
//         <h2>Contacts</h2>
//     </section>
// }
// function Projects() {
//     const [projs, setProjs] = useState(['Puki Proj', 'Muki Proj'])
//     const projList = projs.map((proj, idx) => (
//         <div className="proj-preview" key={proj} onClick={(ev) => {
//             ev.stopPropagation();
//             setProjs(projs.filter(p => p !== proj))
//         }}>
//           {proj}
//         </div>
//       ));
//     return <section style={{ height: '50vh', backgroundColor: 'lightblue' }}>
//         <h2>Projects</h2>
//         {/* <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} */}
//             {/* transitionLeaveTimeout={300}>
//             {projList} */}
//         {/* </CSSTransitionGroup> */}
//         <button onClick={ev => {
//             ev.stopPropagation();
//             setProjs([...projs, 'Babu Proj' + Date.now() % 100])
//         }}>Add</button>
//     </section >
// }

// function SplitPane(props) {

//     const [width, setWidth] = useState(30)

//     if (false && width === 60) {
//         throw new Error('Projects cannot load')
//     }
//     return (
//         <div className="split-pane" style={{
//             display: 'flex'
//         }}>
//             <div style={{ width: width + '%' }} onClick={() => {
//                 if (width + 10 <= 100) setWidth(width + 10)
//             }}>
//                 {props.left}
//             </div>
//             <div style={{ flex: 1 }} onClick={() => {
//                 if (width > 10) setWidth(width - 10)
//             }}>
//                 {props.right}
//             </div>
//         </div>
//     )
// }




// export class AboutUs extends React.Component {
//     state = {
//         count: 1000,
//     }
//     componentDidMount() {
//         // this.interval = setInterval(() => {
//         //     console.log('Setting Followers Count');
//         //     this.setState(({ count }) => ({ count: count + utilService.getRandomIntInclusive(5, 20) }))
//         // }, 2500)
//     }
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }

//     shouldComponentUpdate() {
//         return true
//     }

//     onTellMeMore = () => {
//         console.log('Telling you more');
//     }
//     render() {
//         const { count } = this.state
//         return (
//             <section>
//                 <h2>About Us</h2>
//                 {/* <Carousel autoPlay>
//                     <div>
//                         <img alt="" src="https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large" />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                     <div>
//                         <img alt="" src="https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large" />
//                         <p className="legend">Legend 2</p>
//                     </div>
//                 </Carousel> */}
//                 {/* <ImgCarousel imgUrls={['https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large', 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large', 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large', 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large']} /> */}


//                 <MyErrorBoundary>

//                     <SplitPane
//                         left={
//                             <Contacts />
//                         }
//                         right={
//                             <Projects />
//                         } />

// //                 </MyErrorBoundary>

// //                 <FancyBox onClose={() => console.log('ok, closing')}>
// //                     <h3>{count.toLocaleString()} Followers</h3>
// //                     <button onClick={this.onTellMeMore}>Tell me More</button>
// //                 </FancyBox>

// //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>
// //             </section>
// //         )
// //     }
// // }

// //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>
// //             </section>
// //         )
// //     }
// // }

// // class MyErrorBoundary extends React.Component {
// //     state = { error: null, errorInfo: null };

//     componentDidCatch(error, errorInfo) {
//         // Catch errors in children and re-render with error message
//         // Note: in development the error is still presented on screen and you need to ESC to see the fallback UI
//         this.setState({
//             error,
//             errorInfo
//         })
//         // TODO: Log error to an error reporting service
//         // logger.report(error)
//     }
//     render() {
//         if (this.state.errorInfo) {
//             // Error path
//             return (
//                 <div>
//                     <h2>Something went wrong.</h2>

//                     <details style={{ whiteSpace: 'pre-wrap' }}>
//                         {this.state.error && this.state.error.toString()}
//                         <br />
//                         {this.state.errorInfo.componentStack}
//                     </details>
//                 </div>
//             );
//         }
//         // Normally, just render children
//         return this.props.children;
//     }
// }
