<template>
<div :style='{"width":"90%","padding":"30px 0px 40px","margin":"10px auto","position":"relative","background":"rgba(255,255,255,.0)"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影编号" prop="dianyingbianhao">
              <el-input v-model="ruleForm.dianyingbianhao" placeholder="电影编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影名称" prop="dianyingmingcheng">
            <el-input v-model="ruleForm.dianyingmingcheng" 
                placeholder="电影名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="电影分类" prop="dianyingfenlei">
            <el-select v-model="ruleForm.dianyingfenlei" placeholder="请选择电影分类"  >
              <el-option
                  v-for="(item,index) in dianyingfenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="海报" v-if="type!='cross' || (type=='cross' && !ro.haibao)" prop="haibao">
            <file-upload
            tip="点击上传海报"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.haibao?ruleForm.haibao:''"
            @change="haibaoUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="海报" prop="haibao">
                <img v-if="ruleForm.haibao.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.haibao.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.haibao.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="导演" prop="daoyan">
            <el-input v-model="ruleForm.daoyan" 
                placeholder="导演" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="编剧" prop="bianju">
            <el-input v-model="ruleForm.bianju" 
                placeholder="编剧" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="时长" prop="shizhang">
            <el-input v-model="ruleForm.shizhang" 
                placeholder="时长" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="视频" prop="shipin">
            <file-upload
            tip="点击上传视频"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.shipin?ruleForm.shipin:''"
            @change="shipinUploadChange"
            ></file-upload>
          </el-form-item> 
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="主演" prop="zhuyan">
            <el-input v-model="ruleForm.zhuyan" 
                placeholder="主演" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="制片地区" prop="zhipiandiqu">
            <el-input v-model="ruleForm.zhipiandiqu" 
                placeholder="制片地区" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="综合评分" prop="zonghepingfen">
            <el-select v-model="ruleForm.zonghepingfen" placeholder="请选择综合评分"  >
              <el-option
                  v-for="(item,index) in zonghepingfenOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影详情" prop="dianyingxiangqing">
            <editor 
                :style='{"border":"1px solid #d2e5fd","minHeight":"300px","padding":"0","margin":"0","backgroundColor":"#fff","borderRadius":"0","width":"100%","height":"auto"}'
                v-model="ruleForm.dianyingxiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"5px outset #6eb9ff","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"4px","background":"#fff","width":"128px","lineHeight":"40px","fontSize":"14px","height":"46px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"5px outset #d1d1d1","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"46px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            dianyingbianhao : false,
            dianyingmingcheng : false,
            dianyingfenlei : false,
            haibao : false,
            daoyan : false,
            bianju : false,
            shizhang : false,
            shipin : false,
            zhuyan : false,
            zhipiandiqu : false,
            dianyingxiangqing : false,
            zonghepingfen : false,
            clicktime : false,
            clicknum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          dianyingbianhao: this.getUUID(),
          dianyingmingcheng: '',
          dianyingfenlei: '',
          haibao: '',
          daoyan: '',
          bianju: '',
          shizhang: '',
          shipin: '',
          zhuyan: '',
          zhipiandiqu: '',
          dianyingxiangqing: '',
          zonghepingfen: '',
          clicktime: '',
          clicknum: '',
        },
        dianyingfenleiOptions: [],
        zonghepingfenOptions: [],
        rules: {
          dianyingbianhao: [
          ],
          dianyingmingcheng: [
          ],
          dianyingfenlei: [
          ],
          haibao: [
            { required: true, message: '海报不能为空', trigger: 'blur' },
          ],
          daoyan: [
          ],
          bianju: [
          ],
          shizhang: [
          ],
          shipin: [
            { required: true, message: '视频不能为空', trigger: 'blur' },
          ],
          zhuyan: [
          ],
          zhipiandiqu: [
          ],
          dianyingxiangqing: [
          ],
          zonghepingfen: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
      };
    },
    computed: {



    },
    components: {
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='dianyingbianhao'){
              this.ruleForm.dianyingbianhao = obj[o];
              this.ro.dianyingbianhao = true;
              continue;
            }
            if(o=='dianyingmingcheng'){
              this.ruleForm.dianyingmingcheng = obj[o];
              this.ro.dianyingmingcheng = true;
              continue;
            }
            if(o=='dianyingfenlei'){
              this.ruleForm.dianyingfenlei = obj[o];
              this.ro.dianyingfenlei = true;
              continue;
            }
            if(o=='haibao'){
              this.ruleForm.haibao = obj[o].split(",")[0];
              this.ro.haibao = true;
              continue;
            }
            if(o=='daoyan'){
              this.ruleForm.daoyan = obj[o];
              this.ro.daoyan = true;
              continue;
            }
            if(o=='bianju'){
              this.ruleForm.bianju = obj[o];
              this.ro.bianju = true;
              continue;
            }
            if(o=='shizhang'){
              this.ruleForm.shizhang = obj[o];
              this.ro.shizhang = true;
              continue;
            }
            if(o=='shipin'){
              this.ruleForm.shipin = obj[o];
              this.ro.shipin = true;
              continue;
            }
            if(o=='zhuyan'){
              this.ruleForm.zhuyan = obj[o];
              this.ro.zhuyan = true;
              continue;
            }
            if(o=='zhipiandiqu'){
              this.ruleForm.zhipiandiqu = obj[o];
              this.ro.zhipiandiqu = true;
              continue;
            }
            if(o=='dianyingxiangqing'){
              this.ruleForm.dianyingxiangqing = obj[o];
              this.ro.dianyingxiangqing = true;
              continue;
            }
            if(o=='zonghepingfen'){
              this.ruleForm.zonghepingfen = obj[o];
              this.ro.zonghepingfen = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/dianyingfenlei/dianyingfenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.dianyingfenleiOptions = res.data.data;
          }
        });
        this.zonghepingfenOptions = "10,9,8,7,6,5,4,3,2,1".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('dianying/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('dianying/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('dianying/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('dianying/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      haibaoUploadChange(fileUrls) {
          this.ruleForm.haibao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      shipinUploadChange(fileUrls) {
          this.ruleForm.shipin = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #3d74c0;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #d2e5fd;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #d2e5fd;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #d2e5fd;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #d2e5fd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #ddd;
	  background: #fff;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #d2e5fd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #ddd;
	  background: #fff;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #d2e5fd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #ddd;
	  background: #fff;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #d2e5fd;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
