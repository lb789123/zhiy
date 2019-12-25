package com.zhiy.service.impl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.common.TokenCache;
import com.zhiy.dao.ScjMapper;
import com.zhiy.dao.GxxxbMapper;
import com.zhiy.dao.ScjxxMapper;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.pojo.Scj;
import com.zhiy.pojo.Scjxx;
import com.zhiy.service.IScjService;
import com.zhiy.util.MD5Util;
import com.zhiy.vo.GxxxbListVo;
import com.zhiy.vo.ScjxxVo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhiy.vo.ScjListVo;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/**
 * Created by bu
 */
@Service("iScjService")
public class ScjService implements IScjService {
    @Autowired
    ScjMapper scjMapper;
    @Autowired
    GxxxbMapper gxxxbMapper;
    @Autowired
    ScjxxMapper scjxxMapper;
    @Override
    public ServerResponse<PageInfo> getshoucanglist(int pageNum, int pageSize,String username){
        PageHelper.startPage(pageNum,pageSize);
        List<Scj> ScjList = scjMapper.getzyList(username);
        List<ScjListVo> ScjListVoList = Lists.newArrayList();
        for(Scj ScjItem : ScjList){
            ScjListVo ScjListVo = assembleScjListVo(ScjItem);
            ScjListVoList.add(ScjListVo);
        }
        PageInfo pageResult = new PageInfo(ScjListVoList);
        pageResult.setList(ScjListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> getshoucangxxlist(int pageNum, int pageSize,String username){
        PageHelper.startPage(pageNum,pageSize);
        List<Scjxx> ScjxxList = scjxxMapper.getzyxxxList(username);
        List<ScjxxVo> scjxxVo = Lists.newArrayList();
        for(Scjxx ScjItem : ScjxxList){
            System.out.println(ScjItem.getUsername()+ScjItem.getSchool());
            ScjxxVo sscjListVo = assembleScjListVo(ScjItem);
            //学校概率暂时设置为空
            sscjListVo.setGailv("");
            scjxxVo.add(sscjListVo);
        }
        PageInfo pageResult = new PageInfo(scjxxVo);
        pageResult.setList(scjxxVo);
        return ServerResponse.createBySuccess(pageResult);
    }
    //交换
    private ScjxxVo assembleScjListVo(Scjxx gxxxb){
        ScjxxVo gxxxbListVo = new ScjxxVo();
        gxxxbListVo.setUsername(gxxxb.getUsername());
        gxxxbListVo.setKb(gxxxb.getKb());
        gxxxbListVo.setPc(gxxxb.getPc());
        gxxxbListVo.setSchool(gxxxb.getSchool());
        gxxxbListVo.setId(gxxxb.getId());
        return gxxxbListVo;
    }
    @Override
    public ServerResponse<String> shoucangzy(Scj scj){
        int validResponse = scjMapper.check(scj.getUsername(), scj.getGxmc(),scj.getZymc(),scj.getKb(),scj.getPc());
        int id=scjMapper.countzy();
        id++;
        scj.setId(id);
        Scjxx scjxx = new Scjxx();scjxx.setUsername(scj.getUsername());scjxx.setSchool(scj.getGxmc());scjxx.setKb(scj.getKb());scjxx.setPc(scj.getPc());
        int validResponsexx = scjxxMapper.checkxx(scjxx.getUsername(),scjxx.getSchool());
        int idxx=scjMapper.countzy();
        idxx++;
        scjxx.setId(idxx);
        if(0!=validResponse){
            return ServerResponse.createByErrorMessage("收藏失败,已存在");
        }
        else {
            int resultCount = scjMapper.insert(scj);
            scjxxMapper.insert(scjxx);
            if (resultCount == 0) {
                System.out.println("收藏失败");
                return ServerResponse.createByErrorMessage("收藏失败");
            }
            System.out.println("收藏成功");
            return ServerResponse.createBySuccessMessage("收藏成功");
        }
    }
    @Override
    public ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc){
        Scj scj = new Scj();
        scj.setUsername(username);scj.setGxmc(gxmc);scj.setZymc(zymc);scj.setKb(kb);scj.setPc(pc);
        ServerResponse validResponse = this.checkdezy(username,gxmc,zymc,kb,pc);
        if(!validResponse.isSuccess()){
            return validResponse;
        }
        int resultCount = scjMapper.delete(username,gxmc,zymc,kb,pc);
        if(resultCount == 0){
            return ServerResponse.createByErrorMessage("删除成功");
        }
        return ServerResponse.createBySuccessMessage("删除失败");
    }
    @Override
    public ServerResponse<Integer> getCartProductCount(String username){
        if(username == null){
            return ServerResponse.createBySuccess(0);
        }
        return ServerResponse.createBySuccess(scjMapper.selectCount(username));
    }
    private ScjListVo assembleScjListVo(Scj Scj){
        ScjListVo ScjListVo = new ScjListVo();
        ScjListVo.setId(Scj.getId());
        ScjListVo.setGxmc(Scj.getGxmc());
        ScjListVo.setZymc(Scj.getZymc());
        ScjListVo.setKb(Scj.getKb());
        ScjListVo.setPc(Scj.getPc());
        ScjListVo.setUsername(Scj.getUsername());
        return ScjListVo;
    }
    private ServerResponse<String> checkzy(String username, String gxmc,String zymc, String kb, String pc){
        //开始校验
        int resultCount = scjMapper.check(username,gxmc,zymc,kb,pc);
        if(resultCount > 0 ){
            return ServerResponse.createByErrorMessage("该专业已收藏");
        }
        return ServerResponse.createBySuccessMessage("校验成功");
    }
    private ServerResponse<String> checkdezy(String username, String gxmc,String zymc, String kb, String pc){
        //开始校验
        int resultCount = scjMapper.check(username,gxmc,zymc,kb,pc);
        if(resultCount ==0 ){
            return ServerResponse.createByErrorMessage("该专业在收藏夹中不存在");
        }
        return ServerResponse.createBySuccessMessage("校验成功");
    }
    public ServerResponse<PageInfo> getscjbiaozhu(int pageNum,int pageSize,String username){
        PageHelper.startPage(pageNum,pageSize);
        List<Scj> ScjList = scjMapper.getzyxxList(username);
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Scj ScjItem : ScjList){
            String gxxm=ScjItem.getGxmc();
            Gxxxb school  = gxxxbMapper.selectbygxxm(gxxm);
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(school);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListVoList);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    private GxxxbListVo assembleGxxxbListVo(Gxxxb gxxxb){
        GxxxbListVo gxxxbListVo = new GxxxbListVo();
        gxxxbListVo.setGxxm(gxxxb.getGxxm());
        gxxxbListVo.setJd(gxxxb.getJd());
        gxxxbListVo.setWd(gxxxb.getWd());
        gxxxbListVo.setWz(gxxxb.getWz());
        gxxxbListVo.setSzd(gxxxb.getSzd());
        gxxxbListVo.setTs(gxxxb.getTs());
        gxxxbListVo.setZs(gxxxb.getZs());
        gxxxbListVo.setTb(gxxxb.getTb());
        return gxxxbListVo;
    }
    @Override
    public ServerResponse<String> shoucangxx(String username, String gxmc,String kb, String pc){
        Scjxx scjxx = new Scjxx();
        scjxx.setUsername(username);scjxx.setSchool(gxmc);
        scjxx.setKb(kb);scjxx.setPc(pc);
        int validResponse = scjxxMapper.checkxx(username,gxmc);
        if(0!=validResponse){
            return ServerResponse.createByErrorMessage("收藏失败,已存在");
        }
        else {
            int id=scjxxMapper.countzy();
            id++;
            scjxx.setId(id);
            int resultCount = scjxxMapper.insert(scjxx);
            if (resultCount == 0) {
                System.out.println("收藏失败");
                return ServerResponse.createByErrorMessage("收藏失败");
            }
            System.out.println("收藏成功");
            return ServerResponse.createBySuccessMessage("收藏成功");
        }
    }
    @Override
    public ServerResponse<String> cherckxx(String username, String gxmc){

        int validResponse = scjxxMapper.checkxx(username,gxmc);
        if(0!=validResponse){
            return ServerResponse.createByErrorMessage("0");
        }
        else {
            return ServerResponse.createByErrorMessage("1");
        }
    }

}