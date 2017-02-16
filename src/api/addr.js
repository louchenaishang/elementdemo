let base = ''
if(process.env.NODE_ENV ==='development'){
  base = 'https://localhost.com:8443'
}else{
  base = 'http://api.louchen.pub'
}

export default base
