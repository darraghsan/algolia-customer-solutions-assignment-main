*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

*Answer*
Hi Marissa, 

Thanks for sharing your honest feedback – it’s always appreciated, even when it’s not the easiest to hear. I understand where you're coming from, especially with needing quicker access to key features like clearing and deleting indexes. I’ll make sure this gets passed along to the design team. They’re always looking to balance functionality with design, so hopefully they can find a way to make this a bit more user-friendly for you and others.

Feel free to reach out if you have any more feedback.
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

*Answer*
Hi Carrie, 

Thanks for reaching out, and I’m sorry to hear about the trouble you’ve been experiencing with Algolia on your website. I understand how critical it is for your users to be able to post their reviews seamlessly.

From what you’ve described, it sounds like the enriched metadata attached to each record might be pushing them beyond the size limit enforced by your current billing plan. Algolia places a limit on the size of individual records to ensure optimal performance and search speed. In your case, with additional metadata that’s not used for search, those limits could be exceeded.

One solution might be to review the non-searchable metadata and see if it can be separated from the searchable data. Alternatively, upgrading your plan may accommodate larger records.

I'd be happy to help you to assess the best path forward. Let me know if you'd like to discuss further or if you have more questions.
  
--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

*Answer*
Hi Marc,

Thanks for reaching out!

It looks like you're trying to use Searchkit to work with Algolia's Instantsearch. Based on the error message in your screenshot, it seems that searchkit hasn't been properly defined in your web app. This can typically happen for a couple of reasons, which I've lisyed below,

CDN Issue: If you’re using the CDN approach, it’s possible that the Searchkit CDN link is missing or the URLs may be incorrect. Below are the correct CDN URLs for you to check:
<script src="https://cdn.jsdelivr.net/npm/@searchkit/instantsearch-client@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4"></script>
<script src="https://cdn.jsdelivr.net/npm/searchkit@latest"></script>

NPM Package Issue: If you’re using the npm package method, the error could be due to the Searchkit package not being installed, or a missing/incorrect import statement. Here’s how to resolve this:

Make sure the package is installed using `npm install searchkit @searchkit/api @searchkit/instantsearch-client`
Then, import it into your app using `import Searchkit from "searchkit"`

I hope this helps. Let me know if you need any more assistance.