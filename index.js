let a=[1,5,7,8,9];
let b=[2,3,4,5,8,];
let result=[];
let indx=0;
 for(let i=0;i<length;i++)
 for(let j=0;j<length;j++){
  if(a[i]!=b[j]){
    result[indx]=a[i];
    indx++;
    result[indx]=a[i];
    indx++;
     }
     if(a[i]==b[j]){
        result[indx]=a[i];
        indx++;
     }
}