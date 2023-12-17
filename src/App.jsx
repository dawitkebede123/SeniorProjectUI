import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Button,
  CheckboxGroup,
  CheckboxIcon,
  Checkbox,
  
} from "@chakra-ui/react";




const App = () => {
  // Some dummy data for the posts
  const posts = [
    {
     image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/ed7a/live/2af3dae0-99ec-11ee-99b7-d55a8e2ed023.jpg",
     heading:"የአቶ ታዬ ደንደአ ባለቤት ይኖሩበት የነበረውን ቤት ለቀው እንዲወጡ መታዘዛቸውን ተናገሩ",
     date:"14 ታህሳስ 2023",
     source:"BBC Amharic",
    },
    {
      image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/f4e4/live/a6b79530-9a7e-11ee-ae24-71cd4a861931.jpg",
      heading:"ቭላድሚር ፑቲን ዩክሬን ሰላም የሚኖራት “ዓላማችን ሲሳካ ብቻ ነው” አሉ",
      date:"ከ 6 ሰአት በፊት",
      source:"BBC Amharic",
    },
    {
      image:"https://cdn.al-ain.com/images/2023/12/14/273-185822-1920x1080-cmsv2-3f8a7aff-89d7-528e-b895-497744ad1a6b-8095522_700x400.jpg",
      heading:"ብሪታንያ ዜጎቿ የውጭ ሀገር ዜጎችን እንዳያገቡ የሚገድብ ህግ አወጣች",
      date:"2023/12/14",
      source:"al-ain",
    },
    {
      image:"https://www.ethiopianreporter.com/files/2023/12/Birhanui.gif",
      heading:"‹‹የአገሪቱን ሥርዓተ መንግሥትና ሕገ መንግሥት ሳትቀበል ድርድር የሚባል ነገር የለም›› ፊልድ ማርሻል ብርሃኑ ጁላ፣ የጦር ኃይሎች ጠቅላይ ኤታ ማዦር ሹም",
      date:"December 13, 2023",
      source:"ethiopianreporter",
    }
  ];

  return (
    
    <ChakraProvider>
      <Box display={'grid'} gridAutoColumns={'minmax(80px,auto)'} backgroundColor={"whitesmoke"}>
        {/* left container */}
      <Box gridColumn={'1/2'}  backgroundColor={"rgb(224,187,32)"}>
        <Box>
          <Heading as={'h1'} fontFamily={"cursive"} color={'black'}>preference</Heading>
          </Box>
        <Box ml={'10px'}>
           
            <Checkbox mt={'20px'}>Ethiopian Reporter</Checkbox>
            <Checkbox mt={'20px'}>BBC Amharic</Checkbox>
            <Checkbox mt={'20px'}>Al Ain Amharic</Checkbox>
            <Checkbox mt={'20px'}>Addis Standard</Checkbox>
            <Checkbox mt={'20px'}>Ethiopian Insider</Checkbox>
            <Checkbox mt={'20px'}>Addis Zemene</Checkbox>
            <Checkbox mt={'20px'}>Addis Admass</Checkbox>
            
           
        </Box>
      </Box>
      {/* right container */}
      <Box gridColumn={`2/6`}  display={'grid'} gridAutoRows={'minmax(30px,auto)'}>
        {/* heading */}
      <Box gridRow={'1/2'}  backgroundColor={"rgb(50, 50, 50)"}>
        <Heading as={'h1'} marginLeft={'200px'} fontFamily={"cursive"} color={"rgb(72, 192, 211)"}>News Aggregation system</Heading>
      
      </Box>
      {/* main body */}
      <Box gridRow={'2/10'} backgroundColor={"rgb(251, 246, 239)"} >
        {/* news list */}
        <Box margin={'20px'}>
          {/* single news */}
          {posts.map((post) => (
              
             <Box display={'grid'} gridtempletecolumns={'Repeat(10px,auto)'} key={post.heading}>
              <Box gridColumn={'1/3'} margin={'10px'} width={'200px'}>
              <Image src={post.image} />
              </Box>
              <Box gridColumn={'3/10'} marginLeft={'10px'}>
                <Heading  fontSize={'24px'}>{post.heading}</Heading>
                <Heading fontSize={'14px'}>{post.date}</Heading>
                <Heading fontSize={'14px'}>{post.source}</Heading>
              </Box>
             </Box>
              ))}
        </Box>
       
      </Box>
      </Box>
        {/* when expand the second box gridColumn will be go from 2/30  to 2/6 */}
      {/* <Box gridColumn={'1/2'} border={'1px solid black'}>edf</Box>
      <Box gridColumn={'2/5'} border={'1px solid black'}>df</Box> */}
    </Box>
    
    </ChakraProvider>
    
  );
};

export default App;
