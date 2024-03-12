import React from "react";
import Mypage from "./servicecompo/Mypage";

const DevOpsServices = () => {
  return (
    <>
      <Mypage img="https://praeclarumtech.com/wp-content/uploads/2023/05/devops-1536x1024.png" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12 mt-3 mb-3">
                <h4 className="fs-2">DevOps Services</h4>
              </div>
              <div className="col-12 mt-1 mb-1">
                <p className="">
                  DevOps is the combination of cultural philosophies, practices,
                  and tools that increases an organization’s ability to deliver
                  applications and services at high velocity: evolving and
                  improving products at a faster pace than organizations using
                  traditional software development and infrastructure management
                  processes. This speed enables organizations to better serve
                  their customers and compete more effectively in the market.
                </p>
              </div>
              <div className="col-12 mt-1 mb-1">
                <p className="fs-5 fw-bold p-0 m-0">Why DevOps Matters</p>
                <p>
                  Software and the Internet have transformed the world and its
                  industries, from shopping to entertainment to banking.
                  Software no longer merely supports a business; rather it
                  becomes an integral component of every part of a business.
                  Companies interact with their customers through software
                  delivered as online services or applications and on all sorts
                  of devices. They also use software to increase operational
                  efficiencies by transforming every part of the value chain,
                  such as logistics, communications, and operations. In a
                  similar way that physical goods companies transformed how they
                  design, build, and deliver products using industrial
                  automation throughout the 20th century, companies in today’s
                  world must transform how they build and deliver software.
                </p>
              </div>
              <div className="col-12 mt-1 mb-1">
                <p>
                  We offer DevOps consulting services to our customers with
                  services encompassing several capabilities, including
                  iterative and incremental development, on-demand workload
                  management, lightweight architecture, security, and automated
                  testing techniques.
                </p>
              </div>
            </div>
            <div className="col-12 mt-1 mb-1">
              <p className="fs-5 fw-bold p-0 m-0">Infrastructure Management</p>
              <p>
                Cloud infrastructure management is a fundamental building block
                for any organization striving to achieve a DevOps methodology.
                Toptal DevOps services can help your company utilize the cloud
                to improve scalability and reliability.
              </p>
            </div>
            <div className="col-12 mt-1 mb-1">
              <p className="fs-5 fw-bold p-0 m-0">Configuration Management</p>
              <p>
                Configuration management standardizes resource configurations
                and enforces their state across cloud and on-premises IT
                infrastructure. Senior DevOps engineers can help your company do
                this in an agile and automated manner.
              </p>
            </div>
            <div className="col-12 mt-1 mb-1">
              <p className="fs-5 fw-bold p-0 m-0">DevOps Automation Service</p>
              <p>
                Automating the deployment (configuration and provisioning)
                process through APIs and optimizations makes companies more
                efficient and agile, while reducing overall production time and
                the associated risk therein.
              </p>
            </div>
            <div className="col-12 mt-4 mb-4">
              <p className="p-3 border-start border-4 border-primary bg-light shadow">
                Our professional development service provides continual care for
                your web products to keep them up to date. We ensure robust
                security, backups, and software updates as well as embed the
                latest functionalities. Our professional developers will
                implement your business vision into a tailored solution with a
                unique combo of technologies and features.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-info mt-3">
      <div className="container">
        <div className="row pt-3 pb-3  text-white align-items-center ">
               <div className="col-md-8 fs-4">
                <p>
                Looking for a First-Class Business Plan Consultant?
                </p>
               </div>
               <div className="col-md-4 text-center text-md-end">
                <div className="btn btn-warning">Contact Us</div>
               </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DevOpsServices;
