const THE_loader = document.querySelector(".loader_Page");
        THE_loader.ClassName +=" hidden";



const xhr=new XMLHttpRequest();
const RAWG_API_url = "https://api.rawg.io/api/games?key=20417dca4f174d80b658420122462dc7&dates=2019-01-01,2021-04-01&ordering=released;";



async function getGames()
{
    // const fetchData=await fetch(RAWG_API_url);
    // const Mockdata= await fetchData.json();
    
    xhr.open('GET',RAWG_API_url,true);

    xhr.onload=()=>
     {
       const Mockdata=JSON.parse(xhr.response);
    //    console.log("yini inkinga?");
        console.log(Mockdata);
    


        //while(count<=1)
        for(let count=0;count<=5;count++)
        {
                let Output1_BG_PIC="";
                

                Output1_BG_PIC +=  '<img id="img " src = "' + Mockdata.results[count].background_image +  '" alt = "img NULL"' +'>' + '</div>';
                

            Output1_BG_PIC +='<span class="tooltiptext">' + Mockdata.results[count].name   +  ' </div>';
                

                let Output3_game_developer="";
                let Output4_game_Genre="";
                
                let Output5_game_Platforms="";
            let Output6_game_GameWebsite="";
            let Output7_Game_AgeR="";
            
                
                
            const GAME='https://api.rawg.io/api/games/'+ Mockdata.results[count].id +'?key=20417dca4f174d80b658420122462dc7';
                    
                   

            const xhr1=new XMLHttpRequest();

            xhr1.open('GET',GAME,true);
            xhr1.onload=()=>
            {
                
                const MockdataDEV=JSON.parse(xhr1.response);
                console.log(MockdataDEV);

                //GAME.developers[count];
                Output3_game_developer +="<li>Developer : ";
                
                if( MockdataDEV.developers == null )
                    {
                        Output3_game_developer += "N/A" +"</li>";
                        document.getElementById('Game_DEV' + count).innerHTML =Output3_game_developer;
                    }
                else
                    {


                        let con = 0;
                        while(MockdataDEV.developers[con] != null)
                        {
                        
                                let cout_morethanONE=0;
                                if(MockdataDEV.developers[con] != null && MockdataDEV.developers[con+1] != null)
                                {
                                    while(MockdataDEV.developers[cout_morethanONE] !=null)
                                    {
                                        
                                        
                                        Output3_game_developer +=  MockdataDEV.developers[cout_morethanONE].name; 
                                        if(MockdataDEV.developers[cout_morethanONE+1] !=null)
                                        Output3_game_developer += ", ";
                                       // console.log(Output3_game_developer);
                                        cout_morethanONE++;
                                    }
                                    Output3_game_developer += "</li>";
                                    document.getElementById("Game_DEV" + count).innerHTML =Output3_game_developer;
                                    break;
                                    

                                }
                                Output3_game_developer +=  MockdataDEV.developers[con].name + "</li>";

                                document.getElementById('Game_DEV'+ count).innerHTML = Output3_game_developer;
                            
                        
                            con++;
                        }
                    }

                        Output4_game_Genre +="<li> Genre/s : ";
                
                if( MockdataDEV.genres == null )
                    {
                        Output4_game_Genre += "N/A" +"</li>";
                        document.getElementById('Game_Genre' + count).innerHTML =Output4_game_Genre;
                    }
                else
                    {


                        let con1 = 0;
                        while(MockdataDEV.genres[con1] != null)
                        {
                        
                                let cout_morethanONE1=0;
                                if(MockdataDEV.genres[con1] != null && MockdataDEV.genres[con1+1] != null)
                                {
                                    while(MockdataDEV.genres[cout_morethanONE1] !=null)
                                    {
                                        
                                        
                                        Output4_game_Genre +=  MockdataDEV.genres[cout_morethanONE1].name; 
                                        if(MockdataDEV.genres[cout_morethanONE1+1] !=null)
                                        Output4_game_Genre += ", ";
                                        cout_morethanONE1++;
                                    }
                                    Output4_game_Genre += "</li>";
                                    document.getElementById('Game_Genre' + count).innerHTML =Output4_game_Genre;
                                    break;
                                    

                                }
                                Output4_game_Genre +=  MockdataDEV.genres[con1].name + "</li>";

                                document.getElementById('Game_Genre' + count).innerHTML =Output4_game_Genre;
                    
                            
                        // console.log("con=="+con+ " " );
                            con1++;
                        }

            
                    }

                


                



                        Output5_game_Platforms +="<li> Platforms : ";
                
                        if( MockdataDEV.platforms == null )
                            {
                                Output5_game_Platforms += "N/A" +"</li>";
                                document.getElementById('Platforms' + count).innerHTML =Output5_game_Platforms;
                            }
                        else
                            {
            
            
                                let con2 = 0;
                                let tempPlatforms="";
                                while(MockdataDEV.platforms[con2] != null)
                                {
                                
                                        let cout_morethanONE2=0;
                                        if(MockdataDEV.platforms[con2] != null && MockdataDEV.platforms[con2+1] != null)
                                        {
                                            while(MockdataDEV.platforms[cout_morethanONE2] !=null)
                                            {
                                                
                                                
                                                Output5_game_Platforms +=  MockdataDEV.platforms[cout_morethanONE2].platform.name;
                                                tempPlatforms+=  MockdataDEV.platforms[cout_morethanONE2].platform.name;
                                                if(MockdataDEV.platforms[cout_morethanONE2+1] !=null)
                                                {
                                                    Output5_game_Platforms += ", ";
                                                    tempPlatforms +=",";
                                                    
                                                    
                                                }
                                                cout_morethanONE2++;
                                            }
                                            Output5_game_Platforms += "</li>";
                                            document.getElementById('Platforms' + count).innerHTML =Output5_game_Platforms;
                                            break;
                                            
            
                                        }
                                        Output5_game_Platforms +=  MockdataDEV.platforms[con2].platform.name + "</li>";
                                        tempPlatforms +=MockdataDEV.platforms[con2].platform.name;
                                        document.getElementById('Platforms' + count).innerHTML =Output5_game_Platforms;
                            
                                    
                                // console.log("con=="+con+ " " );
                                con2++;
                                }
            
                    
                            }


                        // Output6_game_Ratings +=" Ratings : ";
                        Output1_BG_PIC +=" Ratings :";
                
                            if( MockdataDEV.rating == null )
                                {
                                    //Output6_game_Ratings += "N/A" + "</span>";
                                    Output1_BG_PIC += "N/A" + "</span>";
                                // document.getElementById('Ratings' + count).innerHTML =Output6_game_Ratings;
                                document.getElementById('img' + count).innerHTML =Output1_BG_PIC

                                }
                            else
                                {           
                                // Output6_game_Ratings +=  MockdataDEV.ratings[count].percent + "%";
                                Output1_BG_PIC  +=  MockdataDEV.rating + "/" +"5"+"</span>";
                                        // document.getElementById('Ratings' + count).innerHTML =Output6_game_Ratings; 
                                        document.getElementById('img' + count).innerHTML =Output1_BG_PIC   

                                }
            


                                Output6_game_GameWebsite +="<li> Game URI : ";
                
                                if( MockdataDEV.website == null )
                                    {
                                        Output6_game_GameWebsite += "N/A" +"</li>";
                                        document.getElementById('Game_website' + count).innerHTML =Output6_game_GameWebsite;
                                    }
                                else
                                    {           
                                        Output6_game_GameWebsite += "<a href="+  MockdataDEV.website + 'target="_blank">' + MockdataDEV.website + "</a>"+ "</li>";
                                                document.getElementById('Game_website' + count).innerHTML =Output6_game_GameWebsite;        
                                    }
                
                
                                    Output7_Game_AgeR="<li> Age Rating :";

                                    if( MockdataDEV.esrb_rating == null )
                                    {
                                        Output7_Game_AgeR += "N/A" +"</li>";
                                        document.getElementById('Age_rating' + count).innerHTML =Output7_Game_AgeR;
                                    }
                                else
                                    {           
                                        Output7_Game_AgeR += MockdataDEV.esrb_rating.name+"</li>";
                                                document.getElementById('Age_rating' + count).innerHTML =Output7_Game_AgeR;        
                                    }



                                    let systaemR="";
                                    let num=0;
                                    let num1=0;
                                    while(MockdataDEV.platforms[num].platform !=null)
                                    {
                                        if(MockdataDEV.platforms[num].platform.name == "PC")
                                        {
                                            if(MockdataDEV.platforms[num].requirements.recommended !=null)
                                            {
                                                systaemR+= MockdataDEV.platforms[num].requirements.recommended;
                                              
                                                document.getElementById('SystemR' + count).innerHTML =systaemR;
                                                
                                                break;
                                            }
                                            else{
                                                systaemR +="PC System Requirements Not Applicable";
                                                
                                                document.getElementById('SystemR' + count).innerHTML =systaemR;
                                                num1=4;
                                                break;
                                            }
                                           
                                        }
                                        
                                                num++;
                                        
                                    }

                                    if(num1==0)
                                    {
                                        systaemR +="STATNDED " + "tempPlatforms";
                                    document.getElementById('SystemR' + count).innerHTML =systaemR;
                                    
                                    }

                                   // console.log("ehhh---"+num1+"num1 "+ systaemR);

            };   xhr1.send();    //  Output1_BG_PIC=" "
        }
     };
     xhr.send();
};

getGames();
