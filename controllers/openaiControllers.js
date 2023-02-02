const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const createImage = async(req, res) => {
  const {prompt, size} = req.body;

  // Conditional statement for the image size
  const imageSize = () => {
  if(size === 'small') {
  return '256x256'
  } else if (size === 'medium') {
    return '512x512'
  } else {
    return '1024x1024'
  }
  }
 
  // try and catch block 
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize()
    });
    image_url = response.data.data[0].url;
    console.log(image_url)
  // response result 
    res.status(200).json({
      success: true,
      image_link: image_url
    })
    
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false
    })
  }  
}

module.exports = {createImage};