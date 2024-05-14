export const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  heading:
    'font-poppins font-semibold xs:text-[28px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ',
  headingSM:
    'font-poppins font-medium xs:text-[20px] text-[20px] text-white xs:leading-[50px] leading-[50.8px] rounded-full xs:pl-8 pl-2  h-[60px] sm:w-[350px] w-[300px] sm:h-[50px] h-[50px]',
  paragraph:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',
  paragraphSub:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] xs:pl-8 pl-2',
  serviceHeading:
    'font-poppins font-semibold xs:text-[28px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full ',

  serviceParagraph:
    'font-poppins font-normal text-black text-[18px] leading-[30.8px]',
  serviceHeadingSM:
    'font-poppins font-medium xs:text-[20px] text-[20px] text-white xs:leading-[50px] leading-[50.8px] xs:pl-8 pl-2  h-[60px] sm:w-[350px] w-[300px] sm:h-[50px] h-[50px]',

  serviceParagraphSub:
    'font-poppins font-normal text-dimblack text-[18px] leading-[30.8px] xs:pl-8 pl-2',
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexButton: 'flex justify-center items-buttom',

  paddingX: '',
  paddingY: 'sm:py-16 py-6',
  // paddingY: "py-6",
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
