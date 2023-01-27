const express=require('express')
const router=express.Router();
const fhirClient=require('./fhir');
router.get("/",async(req,res)=>{
    try {
        const dataFetched=await fhirClient.read({ resourceType: 'Patient', id: 4 })
         if(dataFetched) res.json({
       data:dataFetched
   });
       } catch (error) {
       console.log(error);
   }
})

router.get("/search",async(req,res)=>{
    const data= { resourceType: 'Patient', searchParams: { _count: '3', gender: 'female' } }
    const searchData=await fhirClient.search(data);
    if(!data) return res.json({
      message:"Search Item Not found"
    })

    return res.json({
      message:"Search Item Found",
      data:searchData
    })
})
module.exports=router;