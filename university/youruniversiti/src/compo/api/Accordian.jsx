import Accordion from 'react-bootstrap/Accordion';
import "./acordian.css"
function Accordions({data}) {
  return (
  <div className='container'>
      <Accordion defaultActiveKey="0">
         {
            data.map((elment,ind)=>{
                return(
                    <Accordion.Item     key={ind} eventKey={ind}>
                    <Accordion.Header >💝{elment.name}💝</Accordion.Header>
                    <Accordion.Body  >
                      <div>
                      <p  className=" text-dark fs-5 text-wrap">University name : <span style={{fontFamily:"Cinzel"}} className='text-info'> {elment.name}</span></p>
                        <p className="fs-5 text-dark"> domains : <span className='text-info'> {elment.domains}</span></p>
                        <p className="fs-5 text-dark"> country : <span className='text-info'> {elment.country}</span></p>
                        <p className="fs-5 text-dark"> Alpha Two Code : <span className='text-info'> {elment.alpha_two_code}</span></p>
                      <a className='btn btn-primary' href={elment.web_pages}>Go TO Websit</a>
                        </div>    
                    </Accordion.Body>
                  </Accordion.Item>
                )
            })
         }
    </Accordion>
  </div>
  );
}

export default Accordions;