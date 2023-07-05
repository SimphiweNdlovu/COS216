//THE LOADER FUNCTION


const THE_loader = document.querySelector(".loader_Page");
        THE_loader.ClassName +=" hidden_Page";



const xhr=new XMLHttpRequest();
const RAWG_API_url = "https://api.rawg.io/api/games?key=20417dca4f174d80b658420122462dc7&dates=2021-01-01,2021-04-01&ordering=-metacritic";

async function getGames()
{
   
    xhr.open('GET',RAWG_API_url,true);

    xhr.onload=()=>
     {
       const Mockdata=JSON.parse(xhr.response);
    
        console.log(Mockdata);

            
            for(let count=0;count <=5;count++)
            {
                    let Output1_BG_PIC="";
                    let Output2_Game_name= "";

                    Output1_BG_PIC +=  '<img  src = "' + Mockdata.results[count].background_image +  '" alt = "img NULL"' +'>' + '</div>';
                    document.getElementById('img' + count).innerHTML =Output1_BG_PIC;
                    
                    

                    Output2_Game_name +=  '<h2>' + Mockdata.results[count].name +   '</h2>';
                    document.getElementById('GameName' + count).innerHTML =Output2_Game_name;


                   
                    
                   const GAME='https://api.rawg.io/api/games/'+ Mockdata.results[count].id +'?key=20417dca4f174d80b658420122462dc7';
                    
                   

                    const xhr1=new XMLHttpRequest();

                    xhr1.open('GET',GAME,true);
                
                    
                    let Output4_game_Genre="";
                    let Output5_game_Metacritic="";
                    let Output5_game_Platforms="";
                    
                     xhr1.onload=()=>
                     {
                        let Output3_game_developer="";
                       

                            const MockdataDEV=JSON.parse(xhr1.response);
                           

                            console.log(MockdataDEV);


                            
                                Output3_game_developer +="<li>Developer : ";
                                
                                if( MockdataDEV.developers == null )
                                    {
                                        Output3_game_developer += "N/A" +"</li>";
                                        document.getElementById('Game_DEV' + count).innerHTML = Output3_game_developer;
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
                                    
                                            
                                            con1++;
                                        }

                            
                                    }

                                


                                    Output5_game_Metacritic +="<li> Metacritic Ranking : ";
                                
                                    if( MockdataDEV.metacritic == null )
                                        {
                                            Output5_game_Metacritic += "N/A" +"</li>";
                                            document.getElementById('Metacritic_Ranking' + count).innerHTML =Output5_game_Metacritic;
                                        }
                                    else
                                        {           
                                                    Output5_game_Metacritic +=  MockdataDEV.metacritic + "</li>";
                                                    document.getElementById('Metacritic_Ranking' + count).innerHTML =Output5_game_Metacritic;        
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
                                                while(MockdataDEV.platforms[con2] != null)
                                                {
                                                
                                                        let cout_morethanONE2=0;
                                                        if(MockdataDEV.platforms[con2] != null && MockdataDEV.platforms[con2+1] != null)
                                                        {
                                                            while(MockdataDEV.platforms[cout_morethanONE2] !=null)
                                                            {
                                                                
                                                                
                                                                Output5_game_Platforms +=  MockdataDEV.platforms[cout_morethanONE2].platform.name; 
                                                                if(MockdataDEV.platforms[cout_morethanONE2+1] !=null)
                                                                Output5_game_Platforms += ", ";
                                                                cout_morethanONE2++;
                                                            }
                                                            Output5_game_Platforms += "</li>";
                                                            document.getElementById('Platforms' + count).innerHTML =Output5_game_Platforms;
                                                            break;
                                                            
                            
                                                        }
                                                        Output5_game_Platforms +=  MockdataDEV.platforms[con2].platform.name + "</li>";
                            
                                                        document.getElementById('Platforms' + count).innerHTML =Output5_game_Platforms;
                                            
                                                    
                                
                                                con2++;
                                                }
                            
                                    
                                            }
                
                        };

                    xhr1.send();


                 
            }
    };


    xhr.send();
};

getGames();