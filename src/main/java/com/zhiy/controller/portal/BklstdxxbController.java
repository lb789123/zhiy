package com.zhiy.controller.portal;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Bklstdxxb;
import com.zhiy.service.IBklstdxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpSession;

/**
 * Created by bu
 */
@Controller
@RequestMapping("/bklstdxxb/")

public class BklstdxxbController {
    @Autowired
    IBklstdxxbService iBklstdxxbService;

    @RequestMapping(value = "getBklstdxxbList.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> BklstdxxbList(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zssf, String gxxm, String zskl,String zspc){
        pageSize=1000;
        return iBklstdxxbService.getBklstdxxbList(pageNum,pageSize,zssf,gxxm,zskl,zspc);
    }
//    @RequestMapping(value = "getBklstdxxbListwkl.do",method = RequestMethod.POST)
//    @ResponseBody
//    public ServerResponse<PageInfo> BklstdxxbListwkl(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zssf, String gxxm,String zspc){
//        pageSize=1000;
//        return iBklstdxxbService.getBklstdxxbListwkl(pageNum,pageSize,zssf,gxxm,zspc);
//    }
        @RequestMapping("chaxun1.do")
    @ResponseBody
    public ServerResponse<PageInfo> chaxun1(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String skx,String ksfs,String zssf,String zskl,String zspc){
        pageSize=1000;
        return iBklstdxxbService.chaxun(pageNum,pageSize,skx,ksfs,zssf,zskl,zspc);
    }
    @RequestMapping("chaxun.do")
    @ResponseBody
    public ServerResponse<PageInfo> chaxun(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zssf){
        pageSize=1000;
        String skx="505";
        String ksfs="611";
        String zskl="理科";
        String zspc="第一批";
        zssf="湖北省";
        return iBklstdxxbService.chaxun(pageNum,pageSize,skx,ksfs,zssf,zskl,zspc);
    }
    @RequestMapping("chaxunschool.do")
    @ResponseBody
    public ServerResponse<PageInfo> chaxunschool(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zssf,String skx,String ksfs,String zskl){
        pageSize=1000;
        String zspc="第一批";
        zssf="湖北省";
        System.out.println(ksfs);System.out.println(skx);System.out.println(zskl);
        return iBklstdxxbService.chaxunschool(pageNum,pageSize,skx,ksfs,zssf,zskl,zspc);
    }
}
