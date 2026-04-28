const username = process.argv[2];

if(!username){
    console.log("please provide a Github username");
}else{
    console.log(`Username: ${username}`);
    getActivity(username);
}

async function getActivity(username: string){
    const res = await fetch(`https://api.github.com/users/${username}/events`);
    
    if(!res.ok){
        console.log("User not found or API error");
    return;
    }
    const data = await res.json();
   data.forEach((event: any) => {
      if(event.type === "PushEvent"){
       const commits = event.payload.commits?.length || 0;
console.log(`- Pushed ${commits} commits to ${event.repo.name}`);
      } else if(event.type === "IssuesEvent"){
        console.log(`- Opened issue in repo ${event.repo.name} `);
      } else if(event.type==="WatchEvent"){
        console.log(`- Starred ${event.repo.name}`);
      }else{
        console.log(`- ${event.type} in ${event.repo.name}`);
      }
      if(data.length===0){
        console.log("No recent activity");
        return;
      }
   });
    
}

