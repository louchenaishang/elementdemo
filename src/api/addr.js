let base = ''
if(process.env.NODE_ENV ==='development'){
  base = 'http://localhost.com:8082'
}else{
  base = 'http://api.louchen.pub'
}

export default base
