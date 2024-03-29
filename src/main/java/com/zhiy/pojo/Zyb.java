package com.zhiy.pojo;

public class Zyb {
    private Integer id;

    private String username;

    private String gxmc;

    private String zymc;

    private String kb;

    private String pc;

    private String gailv;

    public Zyb(Integer id, String username, String gxmc, String zymc, String kb, String pc, String gailv) {
        this.id = id;
        this.username = username;
        this.gxmc = gxmc;
        this.zymc = zymc;
        this.kb = kb;
        this.pc = pc;
        this.gailv = gailv;
    }

    public Zyb() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getGxmc() {
        return gxmc;
    }

    public void setGxmc(String gxmc) {
        this.gxmc = gxmc == null ? null : gxmc.trim();
    }

    public String getZymc() {
        return zymc;
    }

    public void setZymc(String zymc) {
        this.zymc = zymc == null ? null : zymc.trim();
    }

    public String getKb() {
        return kb;
    }

    public void setKb(String kb) {
        this.kb = kb == null ? null : kb.trim();
    }

    public String getPc() {
        return pc;
    }

    public void setPc(String pc) {
        this.pc = pc == null ? null : pc.trim();
    }

    public String getGailv() {
        return gailv;
    }

    public void setGailv(String gailv) {
        this.gailv = gailv == null ? null : gailv.trim();
    }
}