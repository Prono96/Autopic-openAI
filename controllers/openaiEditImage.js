const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const editImage = async(req, res) => { 

  try {
    const response = await openai.createImageEdit({
      image: fs.createReadStream("demoImage.png"),
      mask: fs.createReadStream("demoImage2.png"),
      prompt: "Covered with sky",
      n: 1,
      size: "512x512"
    }
     
    );

    console.log(response);
    
    const image_url = response.data.data[0].url;
    
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
      success: false,
    })
  }
  
  
}

module.exports = {editImage};