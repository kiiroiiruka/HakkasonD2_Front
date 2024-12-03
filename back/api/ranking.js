const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); 
const router = express.Router();
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_PASS
const supabase = createClient(supabaseUrl, supabaseKey)
const table="login"


async function getranking(req, res){
}
router.get('/',getranking);

async function getdetail(req, res){
}
router.get('/:id',getdetail);



module.exports = router;