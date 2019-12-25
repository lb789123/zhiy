package com.zhiy.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.ServerResponse;
import com.zhiy.dao.ScjMapper;
import com.zhiy.dao.ScjxxMapper;
import com.zhiy.pojo.Scjxx;
import com.zhiy.service.IScjxxService;
import com.zhiy.vo.ScjxxVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("iScjxxService")

public class ScjxxService implements IScjxxService{
        @Autowired
        ScjxxMapper scjxxMapper;
    @Override
    public ServerResponse<String> shoucangxx(String username, String gxmc, String kb, String pc){
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
    @Override
    public ServerResponse<PageInfo> getshoucangxxlist(int pageNum, int pageSize, String username){
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



}
