import axiosInstance from "../../lib/axios.js";
import transformData from "../../lib/core/transformData.js";

function addCustomFieldToResponse(data, headers, status) {
    const obj = JSON.parse(data);
  if (typeof obj === "object" && obj !== null) {
    return {
      customMessage: "Transformed successfully!",
      statusCode: status || 200, 
      ...obj,
    };
  }

}

async function testApiWithTransformation() {
  try {
    const response = await axiosInstance.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    const context = {
      data: response.data,
      headers: response.headers,
    };

    const transformedData = transformData.call(
      context,
      addCustomFieldToResponse,
      response 
    );

    console.log("✅ Original API Response121:");
    console.log(response.data);

    console.log("\n✅ Transformed API Response:");
    console.log(transformedData); 
  } catch (error) {
    console.error("❌ Error during API request:", error.message);
  }
}

testApiWithTransformation();
