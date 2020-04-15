var client = contentful.createClient({
   space: "aitbdbca11xl",
   accessToken: "pZW1dRIvza3VmJ6hxXBCoohUUjomMDqudntJFbv8kbY",
});

var renderTemplates = (templateId, target) => {
   client.getEntries().then((entries) => {
      var templateTitles = $(templateId).html();
      var payload = Handlebars.compile(templateTitles)(entries);
      console.log(entries);
      $(target).append(payload);
   });
};
renderTemplates("#templateTitles", "#author-list");
