using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Security.Claims;
using Microsoft.Graph;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace api
{
  public class TestTrigger
  {
        private readonly Utilities _utilities;
    public TestTrigger(Utilities utilities)
    {
      this._utilities = utilities;
    }
    [FunctionName("TestTrigger")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      string name = req.Query["name"];

            //get the bearer token
      var headers = req.Headers;
      var token = string.Empty;
      if (headers.TryGetValue("Authorization", out var authHeader))
      {
        if (authHeader[0].StartsWith("Bearer "))
        {
          token = authHeader[0].Substring(7, authHeader[0].Length - 7);
        }
        else
        {
          return new UnauthorizedResult();
        }

      }

      JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
      SecurityToken jsonToken = handler.ReadToken(token);
      JwtSecurityToken jwtSecurityToken = jsonToken as JwtSecurityToken;

      string objectID = jwtSecurityToken.Claims.First(i => i.Type == "oid").Value;
      User user = await _utilities.GetUserByUserId(objectID);

      string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      dynamic data = JsonConvert.DeserializeObject(requestBody);
      name = name ?? data?.name;

      string responseMessage = string.IsNullOrEmpty(name)
          ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
          : $"Hello, {name}. This HTTP triggered function executed successfully.";

      var returnOrbject = new
      {
        name = responseMessage
      };


      return new OkObjectResult(JsonConvert.SerializeObject(returnOrbject));
    }
  }
}
