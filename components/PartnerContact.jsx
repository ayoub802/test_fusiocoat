import React from "react";

export const PartnerContact = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="justify-between row items-center">
          <div className="mb-4 md:mb-0 col-md-5">
            <h2 className="font-bold text__32 mb-3">Vous êtes un installateur professionnel ou un concessionnaire.</h2>
            <p className="text__16 text-[#525252]">
                Vous recherchez le produit qui va apporter totale satisfaction à vos clients et augmenter votre image de marque. Vous êtes au bon endroit !!!
            </p>
            <p className="text__16 text-[#525252] my-4">
            En mettant l’accent sur le professionnalisme et la qualité, nous vous proposons les meilleures revêtements céramiques actuellement disponibles sur le marché en terme de durabilités esthétiques, de conforts d’utilisations et de simplicités d’applications.
            </p>
            <p className="text__16 text-[#525252] my-4">
              Contactez-nous pour plus d’information.            
            </p>
            <div className="my-5">
              <h2 className="font-bold text__32 mb-3">Vous souhaitez devenir un installateur FUSIOCOAT®</h2>
              <p className="text__16 text-[#525252]">
                Vous êtes enthousiaste, animé par l’excellence professionnelle et passionné du detailing.            
              </p>
            <p className="text__16 text-[#525252] my-4">
               Nous vous accompagnons dans votre formation d’installateur de revêtements céramiques FUSIOCOAT®.            
            </p>
            <p className="text__16 text-[#525252] my-4">
            Contactez-nous pour en discuter.           
            </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 col">
                <div className="mb-3">
                  <label
                    className="font-normal text__14 text-[#A3A3A3] form-label"
                    htmlFor="exampleForm.ControlInput1"
                  >
                    First Name<span className="text-[#ED544E]">*</span>
                  </label>
                  <input
                    placeholder="First Name"
                    type="email"
                    id="exampleForm.ControlInput1"
                    className="font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control"
                  />
                </div>
              </div>
              <div className="col-6 col">
                <div className="mb-3">
                  <label
                    className="font-normal text__14 text-[#A3A3A3] form-label"
                    htmlFor="exampleForm.ControlInput1"
                  >
                    Last Name<span className="text-[#ED544E]">*</span>
                  </label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    id="exampleForm.ControlInput1"
                    className="font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label
                className="font-normal text__14 text-[#A3A3A3] form-label"
                htmlFor="exampleForm.ControlInput1"
              >
                Email<span className="text-[#ED544E]">*</span>
              </label>
              <input
                placeholder="Email address"
                type="email"
                id="exampleForm.ControlInput1"
                className="font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control"
              />
            </div>
            <div className="mb-3">
              <label
                className="font-normal text__14 text-[#A3A3A3] form-label"
                htmlFor="exampleForm.ControlInput1"
              >
                Téléphone <span className="text-[#ED544E]">*</span>
              </label>
              <input
                placeholder="N° de Téléphone"
                type="text"
                id="exampleForm.ControlInput1"
                className="font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control"
              />
            </div>
            <div className="mb-3">
              <label
                className="font-normal text__14 text-[#A3A3A3] form-label"
                htmlFor="exampleForm.ControlInput1"
              >
                Your Message<span className="text-[#ED544E]">*</span>
              </label>
              {/* <textarea
                placeholder="How we can help?"
                id="exampleForm.ControlInput1"
                className="font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] py-3 px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control"
                style="height: 100px;"
              ></textarea> */}
               <textarea placeholder="Merci d'écriture votre message*"  type="text" className="font-medium text__14 bg-[#FAFAFA] h-[100px] rounded-[20px] py-3 px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA] form-control" />

            </div>
            <a
              href="#!"
              className="inline-block cursor-pointer text-center font-medium text__16 text-Mwhite !py-[15px] !px-[28px] bg-Mblue !border-Mblue btnClass md:w-auto w-full"
            >
              Envoyer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
