module.exports.java_hashcode = module.exports=function(str) {
      if(typeof(str) === "object") {
        str = JSON.stringify(str);
      }
      var h = 0;
      var len = str.length;
      var off = 0;
      for (var i = 0; i < len; i++) {
        h = 31*h + str.charCodeAt(off++);
        /*  
         *         * Cast to first 32 bits
         *                * Warning: only works for Big endian numbers
         */
        h = h & 0xFFFFFFFF;
      }
      return h;
}
