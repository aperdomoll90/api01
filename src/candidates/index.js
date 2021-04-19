const candidates =[{
    id:1,
    name: 'Vitoria Roas',
    favoriteColor:'blue',
    hobby: 'painting'
},
{
    id:2,
    name: 'Jonah ',
    favoriteColor:'blue',
    hobby: 'sleeping'
},
{
    id:3,
    name: 'Adrian Perdomo', 
    favoriteColor:'purple',
    hobby: 'cooking'
}
]


exports.getCandidates = (request,response)=>{ 
    // response.status(200).json(candidates)
    response.status(200).json({
        status: 200,
        data:candidates,
        message:'query returned successful'
    })
}

// by Id
 exports.getSingleCandidates = (request,response)=>{
    //  const candidateId = request.params.candidateId
     const {candidateId} = request.params
     const myCandidateId = candidates.filter(candidate => candidate.id === parseInt(candidateId))
     response.status(200).json({
         status: 200,
         data: myCandidateId,
         message:'query returned successful'
     })

}

// By color
     exports.getColor = (request,response)=>{
         const {color} = request.params
         const myCandidateColor = candidates.filter(candidate => candidate.favoriteColor === color)
         response.status(200).json({
             status: 200,
             data: myCandidateColor,
             message:'query returned successful'
         })
}

// By hobby
exports.getHobby = (request,response)=>{
    const {myHobby} = request.params
    const myCandidateHobby = candidates.filter(candidate => candidate.hobby === myHobby)
    response.status(200).json({
        status: 200,
        data: myCandidateHobby,
        message:'query returned successful'
    })
}

//all hobbies
exports.getAllHobby = (request,response)=>{
  const everyHobby = candidates.map(eachHob => eachHob.hobby)
  
    response.status(200).json({
        status: 200,
        data: everyHobby,
        message:'query returned successful'
    })
}