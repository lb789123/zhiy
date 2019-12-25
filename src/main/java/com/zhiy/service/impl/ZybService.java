package com.zhiy.service.impl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.common.TokenCache;
import com.zhiy.dao.ZybMapper;
import com.zhiy.pojo.Zyb;
import com.zhiy.service.IZybService;
import com.zhiy.util.MD5Util;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhiy.vo.ZybListVo;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.NumberFormat;
/**
 * Created by bu
 */
@Service("iZybService")
public class ZybService implements IZybService {
    @Autowired
    ZybMapper zybMapper;

    @Override
    //通过用户名得到志愿表
    public ServerResponse<PageInfo> zyb(int pageNum, int pageSize,String username){
        PageHelper.startPage(pageNum,pageSize);
        List<Zyb> zybList = zybMapper.getzybList(username);
        List<ZybListVo> zybListVoList = Lists.newArrayList();
        for(Zyb zybItem : zybList){
            ZybListVo zybListVo = assembleZybListVo(zybItem);
            zybListVoList.add(zybListVo);
        }
        PageInfo pageResult = new PageInfo(zybList);
        pageResult.setList(zybListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    //用户添加志愿
    @Override
    public ServerResponse<String> shoucangzy(String username, String gxmc,String zymc, String kb, String pc){
        Zyb scj = new Zyb();
        scj.setUsername(username);scj.setGxmc(gxmc);scj.setZymc(zymc);scj.setKb(kb);scj.setPc(pc);
        int validResponse = zybMapper.check(username,gxmc,zymc,kb,pc);
        int id=zybMapper.countzy();id++;scj.setId(id);
        String gailv=null;scj.setGailv(gailv);
        if(0!=validResponse){
            return ServerResponse.createByErrorMessage("添加失败,已存在");
        }
        else {
            int resultCount = zybMapper.insert(scj);
            if (resultCount == 0) {
                System.out.println("添加失败");
                return ServerResponse.createByErrorMessage("添加失败");
            }
            System.out.println("添加成功");
            return ServerResponse.createBySuccessMessage("添加成功");
        }
    }
    @Override
    public ServerResponse<String> deletezy(String username, String gxmc,String zymc, String kb, String pc){
        Zyb scj = new Zyb();
        scj.setUsername(username);scj.setGxmc(gxmc);scj.setZymc(zymc);scj.setKb(kb);scj.setPc(pc);
        ServerResponse validResponse = this.checkdezy(username,gxmc,zymc,kb,pc);
        if(!validResponse.isSuccess()){
            return validResponse;
        }
        int resultCount = zybMapper.delete(username,gxmc,zymc,kb,pc);
        if(resultCount == 0){
            return ServerResponse.createByErrorMessage("删除成功");
        }
        return ServerResponse.createBySuccessMessage("删除失败");
    }
    //概率获取
    @Override
    public int zhiyuan(String username){
        double randomNumber;
        randomNumber = Math.random();
        NumberFormat num = NumberFormat.getPercentInstance();
        String rates = num.format(randomNumber);
        List<Zyb> zybList = zybMapper.getzybList(username);
        List<ZybListVo> zybListVoList = Lists.newArrayList();
        for(Zyb zybItem : zybList){
            zybItem.setGailv(rates);
            zybMapper.insert(zybItem);
        }
        return 0;
    }

    private ZybListVo assembleZybListVo(Zyb zyb){
        ZybListVo zybListVo = new ZybListVo();
        zybListVo.setId(zyb.getId());
        zybListVo.setGxmc(zyb.getGxmc());
        zybListVo.setZymc(zyb.getZymc());
        zybListVo.setKb(zyb.getKb());
        zybListVo.setPc(zyb.getPc());
        zybListVo.setUsername(zyb.getUsername());
        zybListVo.setGailv(zyb.getGailv());
        return zybListVo;
    }
    private ServerResponse<String> checkzy(String username, String gxmc,String zymc, String kb, String pc){
        //开始校验
        int resultCount = zybMapper.check(username,gxmc,zymc,kb,pc);
        if(resultCount > 0 ){
            return ServerResponse.createByErrorMessage("该专业已添加至我的志愿");
        }
        return ServerResponse.createBySuccessMessage("校验成功");
    }
    private ServerResponse<String> checkdezy(String username, String gxmc,String zymc, String kb, String pc){
        //开始校验
        int resultCount = zybMapper.check(username,gxmc,zymc,kb,pc);
        if(resultCount ==0 ){
            return ServerResponse.createByErrorMessage("该专业在我的志愿中不存在");
        }
        return ServerResponse.createBySuccessMessage("校验成功");
    }

}
