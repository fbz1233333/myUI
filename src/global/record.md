obj_filter(params,keys){
            // let params = { id: '关于我们', name: '新手购物', pass: '客户服务' }
            let obj={}
            //想返回一个仅包含id和name的对象
            // let keys=['id','name']
            for(let key in params){
                if (keys.includes(key)){
                    // console.log(params[key])
                    this.$set(obj,key,params[key])
                }
            }
            // console.log(obj)
            return obj
        },
        array_obj_filter(array,columns){
            let keys=[]
            for(let i=0;i<columns.length;i++){
                keys.push(columns[i].column)
            }
            // console.log(keys)
            // console.log('keys is',keys)
            let resultData=[]
            for(let i=0;i<array.length;i++){

                resultData.push(this.obj_filter(array[i],keys))

            }
            // console.log(keys)
            return resultData
        }
